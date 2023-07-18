package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "BOPScheduledEquipment.eti;BOPScheduledEquipment.eix;BOPScheduledEquipment.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class BOPScheduledEquipmentVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.BOPScheduledEquipmentVersionList {
  public BOPScheduledEquipmentVersionListImpl(entity.BOPScheduledEquipment base)  {
    super(base);
  }
  
  public BOPScheduledEquipmentVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.BOPScheduledEquipment AsOf(java.util.Date date) {
    return (entity.BOPScheduledEquipment)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.BOPScheduledEquipment> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  
}