package com.ana.test.ws.rest.provided.converter;

import com.ana.test.bean.Service;
import com.ana.test.service.util.NumberUtil;
import com.ana.test.service.util.StringUtil;
import com.ana.test.ws.rest.provided.vo.ServiceVo;
import org.springframework.stereotype.Component;

@Component
public class ServiceConverter extends AbstractConverter<Service, ServiceVo> {

    public ServiceConverter() {
        init(true);
    }
    @Override
    public Service toItem(ServiceVo vo) {
        if (vo == null) {
            return null;
        } else {
            Service item = new Service();
            if (StringUtil.isNotEmpty(vo.getId()))
                item.setId(NumberUtil.toLong(vo.getId()));

            if (StringUtil.isNotEmpty(vo.getNom()))
                item.setNom(vo.getNom());
            return item;
        }
    }

    @Override
    public ServiceVo toVo(Service item) {
        if (item == null) {
            return null;
        } else {
            ServiceVo vo = new ServiceVo();
            if (item.getId() != null)
                vo.setId(NumberUtil.toString(item.getId()));

            if (StringUtil.isNotEmpty(item.getNom()))
                vo.setNom(item.getNom());
            return vo;
        }
    }


    public void init(Boolean value) {
        
    }


}