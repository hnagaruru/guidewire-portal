package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "WCLaborContactDetail.eti;WCLaborContactDetail.eix;WCLaborContactDetail.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class WCLaborContactDetailVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.WCLaborContactDetailVersionList {
  public WCLaborContactDetailVersionListImpl(entity.WCLaborContactDetail base)  {
    super(base);
  }
  
  public WCLaborContactDetailVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.WCLaborContactDetail AsOf(java.util.Date date) {
    return (entity.WCLaborContactDetail)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.WCLaborContactDetail> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  
}