package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/HOPLine/coveragepatterns/HOPReward.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class PackageHOPRewardTheftConvictionLimitTypeImpl extends com.guidewire.pc.api.domain.covterm.PackageCovTermInternal<productmodel.PackageHOPRewardTheftConvictionLimitType> implements productmodel.PackageHOPRewardTheftConvictionLimitType {
  public PackageHOPRewardTheftConvictionLimitTypeImpl(gw.api.productmodel.PackageCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.HOPReward getCoverage() {
    return (productmodel.HOPReward)getClause();
  }
  
  @java.lang.Override
  public productmodel.HOPReward getHOPReward() {
    return (productmodel.HOPReward)getClause();
  }
  
  
}