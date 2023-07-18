package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "PersonalAutoExcl.eti;PersonalAutoExcl.eix;PersonalAutoExcl.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class PersonalAutoExclVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.PersonalAutoExclVersionList {
  public PersonalAutoExclVersionListImpl(entity.PersonalAutoExcl base)  {
    super(base);
  }
  
  public PersonalAutoExclVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.PersonalAutoExcl AsOf(java.util.Date date) {
    return (entity.PersonalAutoExcl)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.PersonalAutoExcl> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  
}