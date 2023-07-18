package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "ContrEquipPartCond.eti;ContrEquipPartCond.eix;ContrEquipPartCond.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class ContrEquipPartCondVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.ContrEquipPartCondVersionList {
  public ContrEquipPartCondVersionListImpl(entity.ContrEquipPartCond base)  {
    super(base);
  }
  
  public ContrEquipPartCondVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.ContrEquipPartCond AsOf(java.util.Date date) {
    return (entity.ContrEquipPartCond)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.ContrEquipPartCond> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  
}