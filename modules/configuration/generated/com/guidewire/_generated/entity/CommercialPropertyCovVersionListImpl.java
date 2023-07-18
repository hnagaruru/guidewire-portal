package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "CommercialPropertyCov.eti;CommercialPropertyCov.eix;CommercialPropertyCov.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class CommercialPropertyCovVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.CommercialPropertyCovVersionList {
  public CommercialPropertyCovVersionListImpl(entity.CommercialPropertyCov base)  {
    super(base);
  }
  
  public CommercialPropertyCovVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.CommercialPropertyCov AsOf(java.util.Date date) {
    return (entity.CommercialPropertyCov)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.CommercialPropertyCov> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  
}