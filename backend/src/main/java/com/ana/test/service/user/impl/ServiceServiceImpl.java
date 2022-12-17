package com.ana.test.service.user.impl;

import com.ana.test.bean.Service;
import com.ana.test.service.user.facade.ServiceService;
import com.ana.test.dao.ServiceDao;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import java.util.List;

@Service
public class ServiceServiceImpl implements ServiceService {


    @Autowired
    private ServiceDao serviceDao;
     @Override
        public Service findByNom(String reference) {
       return serviceDao.findByNom(reference);
       }

    @Override
    @Transactional
     public int deleteByNom(String reference) {
       serviceDao.deleteByNom(reference);
       return 1; 
       }

      @Override
    public List<Service> findAll() {
        return serviceDao.findAll();
    }


    @Override
    public Page<Service> paginate(int page, int size) {
        return serviceDao.findAll(PageRequest.of(page, size));
    }

    @Override
    public Service findById(Long id) {
        return serviceDao.findById(id).orElse(null);
    }

    @Override
    public Service findByIdWithAssociatedList(Long id) {
        return null;
    }

    @Override
    @Transactional
    public int deleteById(Long id) {
        serviceDao.deleteById(id);
         return 1;
    }

    @Override
    public List<List<Service>> getToBeSavedAndToBeDeleted(List<Service> oldList, List<Service> newList) {
        return null;
    }

    @Override
    public Service save(Service entity) {
        return serviceDao.save(entity);
    }

    @Override
    public List<Service> save(List<Service> list) {
        return null;
    }

    @Override
    public Service update(Service entity) {
        return serviceDao.save(entity);
    }

    @Override
    @Transactional
    public int delete(Service entity) {
        return 0;
    }
    
    @Override
    @Transactional
    public void delete(List<Service> list) {

    }

    @Override
    public void update(List<Service> list) {

           }
}
