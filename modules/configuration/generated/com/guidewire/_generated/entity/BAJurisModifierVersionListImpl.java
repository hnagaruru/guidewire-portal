package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "BAJurisModifier.eti;BAJurisModifier.eix;BAJurisModifier.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class BAJurisModifierVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.BAJurisModifierVersionList {
  public BAJurisModifierVersionListImpl(entity.BAJurisModifier base)  {
    super(base);
  }
  
  public BAJurisModifierVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.BAJurisModifier AsOf(java.util.Date date) {
    return (entity.BAJurisModifier)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.BAJurisRateFactor> BAJurisRateFactorsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.BAJurisModifier.BAJURISRATEFACTORS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToBAJurisRateFactors(entity.BAJurisRateFactor bean) {
    addToArray(entity.BAJurisModifier.BAJURISRATEFACTORS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.BAJurisModifier> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.BAJurisRateFactorVersionList> getBAJurisRateFactors() {
    return (java.util.List)getArray(entity.BAJurisModifier.BAJURISRATEFACTORS_PROP.get());
  }
  
  
}