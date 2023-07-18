package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BusinessAutoLine/coveragepatterns/BADealerLimitLiabCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GenericBADealerLimitLiabCustomerTypeImpl extends com.guidewire.pc.api.domain.covterm.BooleanCovTermInternal implements productmodel.GenericBADealerLimitLiabCustomerType {
  public GenericBADealerLimitLiabCustomerTypeImpl(gw.api.productmodel.GenericCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.BADealerLimitLiabCov getBADealerLimitLiabCov() {
    return (productmodel.BADealerLimitLiabCov)getClause();
  }
  
  @java.lang.Override
  public productmodel.BADealerLimitLiabCov getCoverage() {
    return (productmodel.BADealerLimitLiabCov)getClause();
  }
  
  
}