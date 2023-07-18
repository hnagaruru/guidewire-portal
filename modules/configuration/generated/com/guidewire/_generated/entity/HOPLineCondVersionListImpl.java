package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "HOPLineCond.eti;HOPLineCond.eix;HOPLineCond.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class HOPLineCondVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.HOPLineCondVersionList {
  public HOPLineCondVersionListImpl(entity.HOPLineCond base)  {
    super(base);
  }
  
  public HOPLineCondVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.HOPLineCond AsOf(java.util.Date date) {
    return (entity.HOPLineCond)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.HOPLineCond> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  
}