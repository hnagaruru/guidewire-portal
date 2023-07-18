package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GeneralLiabilityCov.eti;GeneralLiabilityCov.eix;GeneralLiabilityCov.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class GeneralLiabilityCovVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.GeneralLiabilityCovVersionList {
  public GeneralLiabilityCovVersionListImpl(entity.GeneralLiabilityCov base)  {
    super(base);
  }
  
  public GeneralLiabilityCovVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.GeneralLiabilityCov AsOf(java.util.Date date) {
    return (entity.GeneralLiabilityCov)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GLCovCost> CostsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GeneralLiabilityCov.COSTS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToCosts(entity.GLCovCost bean) {
    addToArray(entity.GeneralLiabilityCov.COSTS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GeneralLiabilityCov> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.GLCovCostVersionList> getCosts() {
    return (java.util.List)getArray(entity.GeneralLiabilityCov.COSTS_PROP.get());
  }
  
  
}