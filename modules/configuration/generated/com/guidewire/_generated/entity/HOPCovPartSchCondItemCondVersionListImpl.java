package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "HOPCovPartSchCondItemCond.eti;HOPCovPartSchCondItemCond.eix;HOPCovPartSchCondItemCond.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class HOPCovPartSchCondItemCondVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.HOPCovPartSchCondItemCondVersionList {
  public HOPCovPartSchCondItemCondVersionListImpl(entity.HOPCovPartSchCondItemCond base)  {
    super(base);
  }
  
  public HOPCovPartSchCondItemCondVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.HOPCovPartSchCondItemCond AsOf(java.util.Date date) {
    return (entity.HOPCovPartSchCondItemCond)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.HOPCovPartSchCondItemCond> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  
}