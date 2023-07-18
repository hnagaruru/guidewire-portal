package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/PersonalAutoLine/coveragepatterns/PACollisionCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class OptionPACollDeductibleTypeImpl extends com.guidewire.pc.api.domain.covterm.OptionCovTermInternal<productmodel.OptionPACollDeductibleType> implements productmodel.OptionPACollDeductibleType {
  public OptionPACollDeductibleTypeImpl(gw.api.productmodel.OptionCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.PACollisionCov getCoverage() {
    return (productmodel.PACollisionCov)getClause();
  }
  
  @java.lang.Override
  public productmodel.PACollisionCov getPACollisionCov() {
    return (productmodel.PACollisionCov)getClause();
  }
  
  
}