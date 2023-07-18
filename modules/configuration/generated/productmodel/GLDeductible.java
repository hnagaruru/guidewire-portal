package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GLLine/coveragepatterns/GLDeductible.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GLDeductible extends entity.GeneralLiabilityCov {
  protected GLDeductible()  {
    super((java.lang.Void)null);
  }
  
  public GLDeductible(entity.PolicyPeriod branch)  {
    super(branch, "GLDeductible");
  }
  
  public GLDeductible(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GLDeductible");
  }
  
  public productmodel.TypekeyClaimBasisType getClaimBasisTerm() {
    return (productmodel.TypekeyClaimBasisType)getCovTerm("ClaimBasis");
  }
  
  public productmodel.OptionGLBIDeductibleType getGLBIDeductibleTerm() {
    return (productmodel.OptionGLBIDeductibleType)getCovTerm("GLBIDeductible");
  }
  
  public productmodel.OptionGLCSLDeductibleType getGLCSLDeductibleTerm() {
    return (productmodel.OptionGLCSLDeductibleType)getCovTerm("GLCSLDeductible");
  }
  
  public productmodel.OptionGLPDDeductibleType getGLPDDeductibleTerm() {
    return (productmodel.OptionGLPDDeductibleType)getCovTerm("GLPDDeductible");
  }
  
  public boolean getHasClaimBasisTerm() {
    return hasCovTerm("ClaimBasis");
  }
  
  public boolean getHasGLBIDeductibleTerm() {
    return hasCovTerm("GLBIDeductible");
  }
  
  public boolean getHasGLCSLDeductibleTerm() {
    return hasCovTerm("GLCSLDeductible");
  }
  
  public boolean getHasGLPDDeductibleTerm() {
    return hasCovTerm("GLPDDeductible");
  }
  
  static {
    com.guidewire._generated.productmodel.GLDeductibleInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GLDeductible>() {
      public productmodel.GLDeductible newEmptyInstance() {
        return new productmodel.GLDeductible();
      }
      
      
    });
  }
}