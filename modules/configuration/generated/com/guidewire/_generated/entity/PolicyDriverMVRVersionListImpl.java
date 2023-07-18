package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "PolicyDriverMVR.eti;PolicyDriverMVR.eix;PolicyDriverMVR.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class PolicyDriverMVRVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.PolicyDriverMVRVersionList {
  public PolicyDriverMVRVersionListImpl(entity.PolicyDriverMVR base)  {
    super(base);
  }
  
  public PolicyDriverMVRVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.PolicyDriverMVR AsOf(java.util.Date date) {
    return (entity.PolicyDriverMVR)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.PolicyDriverMVR> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  
}