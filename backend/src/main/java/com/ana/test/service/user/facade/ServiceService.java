package com.ana.test.service.user.facade;

import com.ana.test.bean.Service;
import com.ana.test.service.core.facade.AbstractService;

public interface ServiceService extends AbstractService<Service, Long> {

   Service findByNom(String reference);
   int deleteByNom(String ref);

}
