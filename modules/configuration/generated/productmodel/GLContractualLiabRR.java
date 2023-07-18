package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GLLine/coveragepatterns/GLContractualLiabRR.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GLContractualLiabRR extends entity.GeneralLiabilityCov {
  protected GLContractualLiabRR()  {
    super((java.lang.Void)null);
  }
  
  public GLContractualLiabRR(entity.PolicyPeriod branch)  {
    super(branch, "GLContractualLiabRR");
  }
  
  public GLContractualLiabRR(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GLContractualLiabRR");
  }
  
  public productmodel.GenericGLContractualLiabRRDescriptionType getGLContractualLiabRRDescriptionTerm() {
    return (productmodel.GenericGLContractualLiabRRDescriptionType)getCovTerm("GLContractualLiabRRDescription");
  }
  
  public boolean getHasGLContractualLiabRRDescriptionTerm() {
    return hasCovTerm("GLContractualLiabRRDescription");
  }
  
  static {
    com.guidewire._generated.productmodel.GLContractualLiabRRInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GLContractualLiabRR>() {
      public productmodel.GLContractualLiabRR newEmptyInstance() {
        return new productmodel.GLContractualLiabRR();
      }
      
      
    });
  }
}