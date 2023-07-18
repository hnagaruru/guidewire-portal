package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "BusinessAutoCov.eti;BusinessAutoCov.eix;BusinessAutoCov.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class BusinessAutoCovVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.BusinessAutoCovVersionList {
  public BusinessAutoCovVersionListImpl(entity.BusinessAutoCov base)  {
    super(base);
  }
  
  public BusinessAutoCovVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.BusinessAutoCov AsOf(java.util.Date date) {
    return (entity.BusinessAutoCov)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.BALineCovCost> CostsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.BusinessAutoCov.COSTS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToCosts(entity.BALineCovCost bean) {
    addToArray(entity.BusinessAutoCov.COSTS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.BusinessAutoCov> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.BALineCovCostVersionList> getCosts() {
    return (java.util.List)getArray(entity.BusinessAutoCov.COSTS_PROP.get());
  }
  
  
}