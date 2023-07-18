package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/IMLine/coveragepatterns/IMSignCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class OptionIMSignDeductibleTypeImpl extends com.guidewire.pc.api.domain.covterm.OptionCovTermInternal<productmodel.OptionIMSignDeductibleType> implements productmodel.OptionIMSignDeductibleType {
  public OptionIMSignDeductibleTypeImpl(gw.api.productmodel.OptionCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.IMSignCov getCoverage() {
    return (productmodel.IMSignCov)getClause();
  }
  
  @java.lang.Override
  public productmodel.IMSignCov getIMSignCov() {
    return (productmodel.IMSignCov)getClause();
  }
  
  
}