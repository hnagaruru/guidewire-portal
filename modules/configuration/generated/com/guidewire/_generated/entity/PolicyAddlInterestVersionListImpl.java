package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "PolicyAddlInterest.eti;PolicyAddlInterest.eix;PolicyAddlInterest.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class PolicyAddlInterestVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.PolicyAddlInterestVersionList {
  public PolicyAddlInterestVersionListImpl(entity.PolicyAddlInterest base)  {
    super(base);
  }
  
  public PolicyAddlInterestVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.AddlInterestDetail> AdditionalInterestDetailsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.PolicyAddlInterest.ADDITIONALINTERESTDETAILS_PROP.get(), date);
  }
  
  @java.lang.Override
  public entity.PolicyAddlInterest AsOf(java.util.Date date) {
    return (entity.PolicyAddlInterest)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public void addToAdditionalInterestDetails(entity.AddlInterestDetail bean) {
    addToArray(entity.PolicyAddlInterest.ADDITIONALINTERESTDETAILS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.AddlInterestDetailVersionList> getAdditionalInterestDetails() {
    return (java.util.List)getArray(entity.PolicyAddlInterest.ADDITIONALINTERESTDETAILS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.PolicyAddlInterest> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  
}