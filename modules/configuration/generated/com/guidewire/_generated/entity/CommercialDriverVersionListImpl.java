package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "CommercialDriver.eti;CommercialDriver.eix;CommercialDriver.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class CommercialDriverVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.CommercialDriverVersionList {
  public CommercialDriverVersionListImpl(entity.CommercialDriver base)  {
    super(base);
  }
  
  public CommercialDriverVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.CommercialDriver AsOf(java.util.Date date) {
    return (entity.CommercialDriver)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.CommercialDriver> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  
}