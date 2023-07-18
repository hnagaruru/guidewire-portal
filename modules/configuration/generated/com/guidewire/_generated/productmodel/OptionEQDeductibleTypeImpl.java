package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BOPLine/coveragepatterns/BOPEqBldgCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class OptionEQDeductibleTypeImpl extends com.guidewire.pc.api.domain.covterm.OptionCovTermInternal<productmodel.OptionEQDeductibleType> implements productmodel.OptionEQDeductibleType {
  public OptionEQDeductibleTypeImpl(gw.api.productmodel.OptionCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.BOPEqBldgCov getBOPEqBldgCov() {
    return (productmodel.BOPEqBldgCov)getClause();
  }
  
  @java.lang.Override
  public productmodel.BOPEqBldgCov getCoverage() {
    return (productmodel.BOPEqBldgCov)getClause();
  }
  
  
}