package com.ana.test.service.user.impl;

import com.ana.test.bean.Seccurcales;
import com.ana.test.service.user.facade.SeccurcalesService;
import com.ana.test.dao.SeccurcalesDao;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import java.util.List;

@Service
public class SeccurcalesServiceImpl implements SeccurcalesService {


    @Autowired
    private SeccurcalesDao seccurcalesDao;
     @Override
        public Seccurcales findByLibelle(String reference) {
       return seccurcalesDao.findByLibelle(reference);
       }

    @Override
    @Transactional
     public int deleteByLibelle(String reference) {
       seccurcalesDao.deleteByLibelle(reference);
       return 1; 
       }

      @Override
    public List<Seccurcales> findAll() {
        return seccurcalesDao.findAll();
    }


    @Override
    public Page<Seccurcales> paginate(int page, int size) {
        return seccurcalesDao.findAll(PageRequest.of(page, size));
    }

    @Override
    public Seccurcales findById(Long id) {
        return seccurcalesDao.findById(id).orElse(null);
    }

    @Override
    public Seccurcales findByIdWithAssociatedList(Long id) {
        return null;
    }

    @Override
    @Transactional
    public int deleteById(Long id) {
        seccurcalesDao.deleteById(id);
         return 1;
    }

    @Override
    public List<List<Seccurcales>> getToBeSavedAndToBeDeleted(List<Seccurcales> oldList, List<Seccurcales> newList) {
        return null;
    }

    @Override
    public Seccurcales save(Seccurcales entity) {
        return seccurcalesDao.save(entity);
    }

    @Override
    public List<Seccurcales> save(List<Seccurcales> list) {
        return null;
    }

    @Override
    public Seccurcales update(Seccurcales entity) {
        return seccurcalesDao.save(entity);
    }

    @Override
    @Transactional
    public int delete(Seccurcales entity) {
        return 0;
    }
    
    @Override
    @Transactional
    public void delete(List<Seccurcales> list) {

    }

    @Override
    public void update(List<Seccurcales> list) {

           }
}
