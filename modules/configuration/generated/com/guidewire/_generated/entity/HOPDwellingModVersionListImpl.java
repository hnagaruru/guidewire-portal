package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "HOPDwellingMod.eti;HOPDwellingMod.eix;HOPDwellingMod.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class HOPDwellingModVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.HOPDwellingModVersionList {
  public HOPDwellingModVersionListImpl(entity.HOPDwellingMod base)  {
    super(base);
  }
  
  public HOPDwellingModVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.HOPDwellingMod AsOf(java.util.Date date) {
    return (entity.HOPDwellingMod)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.HOPDwellingModifierCost> HOPDwellingModifierCostsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.HOPDwellingMod.HOPDWELLINGMODIFIERCOSTS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.HOPDwellingRF> HOPDwellingRateFactorsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.HOPDwellingMod.HOPDWELLINGRATEFACTORS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToHOPDwellingModifierCosts(entity.HOPDwellingModifierCost bean) {
    addToArray(entity.HOPDwellingMod.HOPDWELLINGMODIFIERCOSTS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToHOPDwellingRateFactors(entity.HOPDwellingRF bean) {
    addToArray(entity.HOPDwellingMod.HOPDWELLINGRATEFACTORS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.HOPDwellingMod> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.HOPDwellingModifierCostVersionList> getHOPDwellingModifierCosts() {
    return (java.util.List)getArray(entity.HOPDwellingMod.HOPDWELLINGMODIFIERCOSTS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.HOPDwellingRFVersionList> getHOPDwellingRateFactors() {
    return (java.util.List)getArray(entity.HOPDwellingMod.HOPDWELLINGRATEFACTORS_PROP.get());
  }
  
  
}