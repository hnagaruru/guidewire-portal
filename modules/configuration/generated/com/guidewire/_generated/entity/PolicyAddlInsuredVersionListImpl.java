package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "PolicyAddlInsured.eti;PolicyAddlInsured.eix;PolicyAddlInsured.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class PolicyAddlInsuredVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.PolicyAddlInsuredVersionList {
  public PolicyAddlInsuredVersionListImpl(entity.PolicyAddlInsured base)  {
    super(base);
  }
  
  public PolicyAddlInsuredVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.PolicyAddlInsured AsOf(java.util.Date date) {
    return (entity.PolicyAddlInsured)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.PolicyAddlInsuredDetail> PolicyAdditionalInsuredDetailsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.PolicyAddlInsured.POLICYADDITIONALINSUREDDETAILS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToPolicyAdditionalInsuredDetails(entity.PolicyAddlInsuredDetail bean) {
    addToArray(entity.PolicyAddlInsured.POLICYADDITIONALINSUREDDETAILS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.PolicyAddlInsured> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.PolicyAddlInsuredDetailVersionList> getPolicyAdditionalInsuredDetails() {
    return (java.util.List)getArray(entity.PolicyAddlInsured.POLICYADDITIONALINSUREDDETAILS_PROP.get());
  }
  
  
}