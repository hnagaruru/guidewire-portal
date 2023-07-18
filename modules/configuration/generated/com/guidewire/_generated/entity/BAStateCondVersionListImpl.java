package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "BAStateCond.eti;BAStateCond.eix;BAStateCond.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class BAStateCondVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.BAStateCondVersionList {
  public BAStateCondVersionListImpl(entity.BAStateCond base)  {
    super(base);
  }
  
  public BAStateCondVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.BAStateCond AsOf(java.util.Date date) {
    return (entity.BAStateCond)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.BAStateCond> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  
}