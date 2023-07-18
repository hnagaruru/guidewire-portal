package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "PolicyAddlInsuredDetail.eti;PolicyAddlInsuredDetail.eix;PolicyAddlInsuredDetail.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class PolicyAddlInsuredDetailVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.PolicyAddlInsuredDetailVersionList {
  public PolicyAddlInsuredDetailVersionListImpl(entity.PolicyAddlInsuredDetail base)  {
    super(base);
  }
  
  public PolicyAddlInsuredDetailVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.PolicyAddlInsuredDetail AsOf(java.util.Date date) {
    return (entity.PolicyAddlInsuredDetail)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.PolicyAddlInsuredDetail> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  
}