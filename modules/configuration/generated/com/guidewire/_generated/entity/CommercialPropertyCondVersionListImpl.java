package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "CommercialPropertyCond.eti;CommercialPropertyCond.eix;CommercialPropertyCond.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class CommercialPropertyCondVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.CommercialPropertyCondVersionList {
  public CommercialPropertyCondVersionListImpl(entity.CommercialPropertyCond base)  {
    super(base);
  }
  
  public CommercialPropertyCondVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.CommercialPropertyCond AsOf(java.util.Date date) {
    return (entity.CommercialPropertyCond)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.CommercialPropertyCond> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  
}