package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "HOPDwellingCond.eti;HOPDwellingCond.eix;HOPDwellingCond.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class HOPDwellingCondVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.HOPDwellingCondVersionList {
  public HOPDwellingCondVersionListImpl(entity.HOPDwellingCond base)  {
    super(base);
  }
  
  public HOPDwellingCondVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.HOPDwellingCond AsOf(java.util.Date date) {
    return (entity.HOPDwellingCond)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.HOPDwellingCond> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  
}