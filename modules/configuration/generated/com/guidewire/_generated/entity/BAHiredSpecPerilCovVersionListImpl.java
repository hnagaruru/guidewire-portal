package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "BAHiredSpecPerilCov.eti;BAHiredSpecPerilCov.eix;BAHiredSpecPerilCov.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class BAHiredSpecPerilCovVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.BAHiredSpecPerilCovVersionList {
  public BAHiredSpecPerilCovVersionListImpl(entity.BAHiredSpecPerilCov base)  {
    super(base);
  }
  
  public BAHiredSpecPerilCovVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.BAHiredSpecPerilCov AsOf(java.util.Date date) {
    return (entity.BAHiredSpecPerilCov)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.BAStateCovCost> CostsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.BAHiredSpecPerilCov.COSTS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToCosts(entity.BAStateCovCost bean) {
    addToArray(entity.BAHiredSpecPerilCov.COSTS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.BAHiredSpecPerilCov> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.BAStateCovCostVersionList> getCosts() {
    return (java.util.List)getArray(entity.BAHiredSpecPerilCov.COSTS_PROP.get());
  }
  
  
}