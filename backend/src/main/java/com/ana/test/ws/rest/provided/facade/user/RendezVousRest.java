package com.ana.test.ws.rest.provided.facade.user;

import com.ana.test.service.user.facade.RendezVousService;
import java.util.List;

import com.ana.test.ws.rest.provided.dto.Page;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.*;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import com.ana.test.bean.RendezVous;
import com.ana.test.ws.rest.provided.converter.RendezVousConverter;
import com.ana.test.ws.rest.provided.vo.RendezVousVo;


@Api("Manages Rendez vous services")
@RestController
@RequestMapping("rendez-vous")
public class RendezVousRest {

    @Autowired
    private RendezVousService rendezVousService;

    @Autowired
    private RendezVousConverter rendezVousConverter;



       @ApiOperation("Finds a list of all Rendez vouss")
       @GetMapping("/")
       public List<RendezVousVo> findAll(){
           return rendezVousConverter.toVo(rendezVousService.findAll());
       }


       @ApiOperation("Finds a list of all Rendez vouss with pagination")
       @GetMapping("/paginate/")
       public Page<RendezVousVo> paginate(@RequestParam int page, @RequestParam int size) {
          org.springframework.data.domain.Page<RendezVous> paginate = rendezVousService.paginate(page, size);
          return new Page<>(size, page, paginate.getTotalElements(), rendezVousConverter.toVo(paginate.getContent()));
        }


       @ApiOperation("Saves the specified Rendez vous")
       @PostMapping("/")
       public RendezVousVo save(@RequestBody  RendezVousVo  entityVo){
        RendezVous entity = rendezVousConverter.toItem(entityVo);
           entity = rendezVousService.save(entity);
        return rendezVousConverter.toVo(entity);
       }


       @ApiOperation("Updates the specified  Rendez vous")
       @PutMapping("/")
       public RendezVousVo update(@RequestBody  RendezVousVo  entityVo){
        RendezVous entity = rendezVousConverter.toItem(entityVo);
           entity = rendezVousService.update(entity);
        return rendezVousConverter.toVo(entity);
       }


       @ApiOperation("delete the specified Rendez vous By Id")
       @DeleteMapping("/{id}/")
       public int delete(@PathVariable Long id){
           return rendezVousService.deleteById(id);
       }

       @ApiOperation("find the specified Rendez vous By Id")
       @GetMapping("/{id}/")
       public RendezVousVo findById(@PathVariable Long id){
           return rendezVousConverter.toVo( rendezVousService.findById(id));
       }

       @ApiOperation("find the specified Rendez vous By Nom")
       @GetMapping("/nom/{reference}/")
        public RendezVousVo findByNom(String reference) {
        return rendezVousConverter.toVo( rendezVousService.findByNom(reference));
       }




}