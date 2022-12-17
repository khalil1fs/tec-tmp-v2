package com.ana.test.ws.rest.provided.facade.user;

import com.ana.test.service.user.facade.ServiceService;
import java.util.List;

import com.ana.test.ws.rest.provided.dto.Page;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.*;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import com.ana.test.bean.Service;
import com.ana.test.ws.rest.provided.converter.ServiceConverter;
import com.ana.test.ws.rest.provided.vo.ServiceVo;


@Api("Manages Service services")
@RestController
@RequestMapping("service")
public class ServiceRest {

    @Autowired
    private ServiceService serviceService;

    @Autowired
    private ServiceConverter serviceConverter;



       @ApiOperation("Finds a list of all Services")
       @GetMapping("/")
       public List<ServiceVo> findAll(){
           return serviceConverter.toVo(serviceService.findAll());
       }


       @ApiOperation("Finds a list of all Services with pagination")
       @GetMapping("/paginate/")
       public Page<ServiceVo> paginate(@RequestParam int page, @RequestParam int size) {
          org.springframework.data.domain.Page<Service> paginate = serviceService.paginate(page, size);
          return new Page<>(size, page, paginate.getTotalElements(), serviceConverter.toVo(paginate.getContent()));
        }


       @ApiOperation("Saves the specified Service")
       @PostMapping("/")
       public ServiceVo save(@RequestBody  ServiceVo  entityVo){
        Service entity = serviceConverter.toItem(entityVo);
           entity = serviceService.save(entity);
        return serviceConverter.toVo(entity);
       }


       @ApiOperation("Updates the specified  Service")
       @PutMapping("/")
       public ServiceVo update(@RequestBody  ServiceVo  entityVo){
        Service entity = serviceConverter.toItem(entityVo);
           entity = serviceService.update(entity);
        return serviceConverter.toVo(entity);
       }


       @ApiOperation("delete the specified Service By Id")
       @DeleteMapping("/{id}/")
       public int delete(@PathVariable Long id){
           return serviceService.deleteById(id);
       }

       @ApiOperation("find the specified Service By Id")
       @GetMapping("/{id}/")
       public ServiceVo findById(@PathVariable Long id){
           return serviceConverter.toVo( serviceService.findById(id));
       }

       @ApiOperation("find the specified Service By Nom")
       @GetMapping("/nom/{reference}/")
        public ServiceVo findByNom(String reference) {
        return serviceConverter.toVo( serviceService.findByNom(reference));
       }




}