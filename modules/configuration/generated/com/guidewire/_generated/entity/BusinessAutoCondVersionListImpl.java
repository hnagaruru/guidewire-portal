package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "BusinessAutoCond.eti;BusinessAutoCond.eix;BusinessAutoCond.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class BusinessAutoCondVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.BusinessAutoCondVersionList {
  public BusinessAutoCondVersionListImpl(entity.BusinessAutoCond base)  {
    super(base);
  }
  
  public BusinessAutoCondVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.BusinessAutoCond AsOf(java.util.Date date) {
    return (entity.BusinessAutoCond)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.BusinessAutoCond> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  
}