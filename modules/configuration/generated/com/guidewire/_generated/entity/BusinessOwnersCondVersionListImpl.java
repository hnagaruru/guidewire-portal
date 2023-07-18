package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "BusinessOwnersCond.eti;BusinessOwnersCond.eix;BusinessOwnersCond.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class BusinessOwnersCondVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.BusinessOwnersCondVersionList {
  public BusinessOwnersCondVersionListImpl(entity.BusinessOwnersCond base)  {
    super(base);
  }
  
  public BusinessOwnersCondVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.BusinessOwnersCond AsOf(java.util.Date date) {
    return (entity.BusinessOwnersCond)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.BusinessOwnersCond> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  
}