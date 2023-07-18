package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "HOPDwellSchCondItemCond.eti;HOPDwellSchCondItemCond.eix;HOPDwellSchCondItemCond.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class HOPDwellSchCondItemCondVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.HOPDwellSchCondItemCondVersionList {
  public HOPDwellSchCondItemCondVersionListImpl(entity.HOPDwellSchCondItemCond base)  {
    super(base);
  }
  
  public HOPDwellSchCondItemCondVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.HOPDwellSchCondItemCond AsOf(java.util.Date date) {
    return (entity.HOPDwellSchCondItemCond)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.HOPDwellSchCondItemCond> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  
}