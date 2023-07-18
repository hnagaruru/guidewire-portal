package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GLLine/coveragepatterns/GLCancellationEarlierNotice.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class DirectCancellationNoticeTypeImpl extends com.guidewire.pc.api.domain.covterm.DirectCovTermInternal implements productmodel.DirectCancellationNoticeType {
  public DirectCancellationNoticeTypeImpl(gw.api.productmodel.DirectCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.GLCancellationEarlierNotice getCondition() {
    return (productmodel.GLCancellationEarlierNotice)getClause();
  }
  
  @java.lang.Override
  public productmodel.GLCancellationEarlierNotice getGLCancellationEarlierNotice() {
    return (productmodel.GLCancellationEarlierNotice)getClause();
  }
  
  
}