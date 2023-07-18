package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "HOPLineSchExclItemExcl.eti;HOPLineSchExclItemExcl.eix;HOPLineSchExclItemExcl.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class HOPLineSchExclItemExclVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.HOPLineSchExclItemExclVersionList {
  public HOPLineSchExclItemExclVersionListImpl(entity.HOPLineSchExclItemExcl base)  {
    super(base);
  }
  
  public HOPLineSchExclItemExclVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.HOPLineSchExclItemExcl AsOf(java.util.Date date) {
    return (entity.HOPLineSchExclItemExcl)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.HOPLineSchExclItemExcl> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  
}