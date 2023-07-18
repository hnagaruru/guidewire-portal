package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "HOPLineCov.eti;HOPLineCov.eix;HOPLineCov.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class HOPLineCovVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.HOPLineCovVersionList {
  public HOPLineCovVersionListImpl(entity.HOPLineCov base)  {
    super(base);
  }
  
  public HOPLineCovVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.HOPLineCov AsOf(java.util.Date date) {
    return (entity.HOPLineCov)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.HOPLineCovCost> HOPLineCovCostsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.HOPLineCov.HOPLINECOVCOSTS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToHOPLineCovCosts(entity.HOPLineCovCost bean) {
    addToArray(entity.HOPLineCov.HOPLINECOVCOSTS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.HOPLineCov> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.HOPLineCovCostVersionList> getHOPLineCovCosts() {
    return (java.util.List)getArray(entity.HOPLineCov.HOPLINECOVCOSTS_PROP.get());
  }
  
  
}