package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/CPLine/coveragepatterns/CPBldgExtraExpenseCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class PackageCPBldgExtraExpenseCovMonthLimitTypeImpl extends com.guidewire.pc.api.domain.covterm.PackageCovTermInternal<productmodel.PackageCPBldgExtraExpenseCovMonthLimitType> implements productmodel.PackageCPBldgExtraExpenseCovMonthLimitType {
  public PackageCPBldgExtraExpenseCovMonthLimitTypeImpl(gw.api.productmodel.PackageCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.CPBldgExtraExpenseCov getCPBldgExtraExpenseCov() {
    return (productmodel.CPBldgExtraExpenseCov)getClause();
  }
  
  @java.lang.Override
  public productmodel.CPBldgExtraExpenseCov getCoverage() {
    return (productmodel.CPBldgExtraExpenseCov)getClause();
  }
  
  
}