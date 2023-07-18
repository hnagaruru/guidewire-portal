package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "PersonalAutoCond.eti;PersonalAutoCond.eix;PersonalAutoCond.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class PersonalAutoCondVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.PersonalAutoCondVersionList {
  public PersonalAutoCondVersionListImpl(entity.PersonalAutoCond base)  {
    super(base);
  }
  
  public PersonalAutoCondVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.PersonalAutoCond AsOf(java.util.Date date) {
    return (entity.PersonalAutoCond)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.PersonalAutoCond> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  
}