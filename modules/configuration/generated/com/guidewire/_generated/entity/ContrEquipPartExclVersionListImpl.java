package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "ContrEquipPartExcl.eti;ContrEquipPartExcl.eix;ContrEquipPartExcl.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class ContrEquipPartExclVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.ContrEquipPartExclVersionList {
  public ContrEquipPartExclVersionListImpl(entity.ContrEquipPartExcl base)  {
    super(base);
  }
  
  public ContrEquipPartExclVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.ContrEquipPartExcl AsOf(java.util.Date date) {
    return (entity.ContrEquipPartExcl)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.ContrEquipPartExcl> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  
}