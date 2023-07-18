package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "HOPDwellSchExclItemExcl.eti;HOPDwellSchExclItemExcl.eix;HOPDwellSchExclItemExcl.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class HOPDwellSchExclItemExclVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.HOPDwellSchExclItemExclVersionList {
  public HOPDwellSchExclItemExclVersionListImpl(entity.HOPDwellSchExclItemExcl base)  {
    super(base);
  }
  
  public HOPDwellSchExclItemExclVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.HOPDwellSchExclItemExcl AsOf(java.util.Date date) {
    return (entity.HOPDwellSchExclItemExcl)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.HOPDwellSchExclItemExcl> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  
}