package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "HOPDwellingExcl.eti;HOPDwellingExcl.eix;HOPDwellingExcl.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class HOPDwellingExclVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.HOPDwellingExclVersionList {
  public HOPDwellingExclVersionListImpl(entity.HOPDwellingExcl base)  {
    super(base);
  }
  
  public HOPDwellingExclVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.HOPDwellingExcl AsOf(java.util.Date date) {
    return (entity.HOPDwellingExcl)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.HOPDwellingExcl> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  
}