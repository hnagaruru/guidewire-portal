package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "WCWaiverOfSubro.eti;WCWaiverOfSubro.eix;WCWaiverOfSubro.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class WCWaiverOfSubroVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.WCWaiverOfSubroVersionList {
  public WCWaiverOfSubroVersionListImpl(entity.WCWaiverOfSubro base)  {
    super(base);
  }
  
  public WCWaiverOfSubroVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.WCWaiverOfSubro AsOf(java.util.Date date) {
    return (entity.WCWaiverOfSubro)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.WCWaiverOfSubro> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  
}