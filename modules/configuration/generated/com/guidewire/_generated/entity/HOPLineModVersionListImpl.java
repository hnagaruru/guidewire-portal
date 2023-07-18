package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "HOPLineMod.eti;HOPLineMod.eix;HOPLineMod.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class HOPLineModVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.HOPLineModVersionList {
  public HOPLineModVersionListImpl(entity.HOPLineMod base)  {
    super(base);
  }
  
  public HOPLineModVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.HOPLineMod AsOf(java.util.Date date) {
    return (entity.HOPLineMod)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.HOPLineModifierCost> HOPLineModifierCostsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.HOPLineMod.HOPLINEMODIFIERCOSTS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.HOPLineRF> HOPLineRateFactorsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.HOPLineMod.HOPLINERATEFACTORS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToHOPLineModifierCosts(entity.HOPLineModifierCost bean) {
    addToArray(entity.HOPLineMod.HOPLINEMODIFIERCOSTS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToHOPLineRateFactors(entity.HOPLineRF bean) {
    addToArray(entity.HOPLineMod.HOPLINERATEFACTORS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.HOPLineMod> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.HOPLineModifierCostVersionList> getHOPLineModifierCosts() {
    return (java.util.List)getArray(entity.HOPLineMod.HOPLINEMODIFIERCOSTS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.HOPLineRFVersionList> getHOPLineRateFactors() {
    return (java.util.List)getArray(entity.HOPLineMod.HOPLINERATEFACTORS_PROP.get());
  }
  
  
}