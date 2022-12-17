package com.ana.test.ws.rest.provided.facade.user;

import com.ana.test.service.user.facade.SeccurcalesService;
import java.util.List;

import com.ana.test.ws.rest.provided.dto.Page;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.*;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import com.ana.test.bean.Seccurcales;
import com.ana.test.ws.rest.provided.converter.SeccurcalesConverter;
import com.ana.test.ws.rest.provided.vo.SeccurcalesVo;


@Api("Manages Seccurcales services")
@RestController
@RequestMapping("seccurcales")
public class SeccurcalesRest {

    @Autowired
    private SeccurcalesService seccurcalesService;

    @Autowired
    private SeccurcalesConverter seccurcalesConverter;



       @ApiOperation("Finds a list of all Seccurcaless")
       @GetMapping("/")
       public List<SeccurcalesVo> findAll(){
           return seccurcalesConverter.toVo(seccurcalesService.findAll());
       }


       @ApiOperation("Finds a list of all Seccurcaless with pagination")
       @GetMapping("/paginate/")
       public Page<SeccurcalesVo> paginate(@RequestParam int page, @RequestParam int size) {
          org.springframework.data.domain.Page<Seccurcales> paginate = seccurcalesService.paginate(page, size);
          return new Page<>(size, page, paginate.getTotalElements(), seccurcalesConverter.toVo(paginate.getContent()));
        }


       @ApiOperation("Saves the specified Seccurcales")
       @PostMapping("/")
       public SeccurcalesVo save(@RequestBody  SeccurcalesVo  entityVo){
        Seccurcales entity = seccurcalesConverter.toItem(entityVo);
           entity = seccurcalesService.save(entity);
        return seccurcalesConverter.toVo(entity);
       }


       @ApiOperation("Updates the specified  Seccurcales")
       @PutMapping("/")
       public SeccurcalesVo update(@RequestBody  SeccurcalesVo  entityVo){
        Seccurcales entity = seccurcalesConverter.toItem(entityVo);
           entity = seccurcalesService.update(entity);
        return seccurcalesConverter.toVo(entity);
       }


       @ApiOperation("delete the specified Seccurcales By Id")
       @DeleteMapping("/{id}/")
       public int delete(@PathVariable Long id){
           return seccurcalesService.deleteById(id);
       }

       @ApiOperation("find the specified Seccurcales By Id")
       @GetMapping("/{id}/")
       public SeccurcalesVo findById(@PathVariable Long id){
           return seccurcalesConverter.toVo( seccurcalesService.findById(id));
       }

       @ApiOperation("find the specified Seccurcales By Libelle")
       @GetMapping("/libelle/{reference}/")
        public SeccurcalesVo findByLibelle(String reference) {
        return seccurcalesConverter.toVo( seccurcalesService.findByLibelle(reference));
       }




}