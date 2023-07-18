package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "PAVhcleAddlInterest.eti;PAVhcleAddlInterest.eix;PAVhcleAddlInterest.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class PAVhcleAddlInterestVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.PAVhcleAddlInterestVersionList {
  public PAVhcleAddlInterestVersionListImpl(entity.PAVhcleAddlInterest base)  {
    super(base);
  }
  
  public PAVhcleAddlInterestVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.PAVhcleAddlInterest AsOf(java.util.Date date) {
    return (entity.PAVhcleAddlInterest)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.PAVhcleAddlInterest> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  
}