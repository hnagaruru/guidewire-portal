package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "BusinessOwnersCov.eti;BusinessOwnersCov.eix;BusinessOwnersCov.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class BusinessOwnersCovVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.BusinessOwnersCovVersionList {
  public BusinessOwnersCovVersionListImpl(entity.BusinessOwnersCov base)  {
    super(base);
  }
  
  public BusinessOwnersCovVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.BusinessOwnersCov AsOf(java.util.Date date) {
    return (entity.BusinessOwnersCov)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.BOPCovCost> CostsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.BusinessOwnersCov.COSTS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToCosts(entity.BOPCovCost bean) {
    addToArray(entity.BusinessOwnersCov.COSTS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.BusinessOwnersCov> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.BOPCovCostVersionList> getCosts() {
    return (java.util.List)getArray(entity.BusinessOwnersCov.COSTS_PROP.get());
  }
  
  
}