package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/HOPLine/coveragepatterns/HOPSpecialLimitations.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class PackageHOPSpecialLimitationsFursTypeImpl extends com.guidewire.pc.api.domain.covterm.PackageCovTermInternal<productmodel.PackageHOPSpecialLimitationsFursType> implements productmodel.PackageHOPSpecialLimitationsFursType {
  public PackageHOPSpecialLimitationsFursTypeImpl(gw.api.productmodel.PackageCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.HOPSpecialLimitations getCondition() {
    return (productmodel.HOPSpecialLimitations)getClause();
  }
  
  @java.lang.Override
  public productmodel.HOPSpecialLimitations getHOPSpecialLimitations() {
    return (productmodel.HOPSpecialLimitations)getClause();
  }
  
  
}