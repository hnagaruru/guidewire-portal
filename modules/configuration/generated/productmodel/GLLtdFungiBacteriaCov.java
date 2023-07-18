package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GLLine/coveragepatterns/GLLtdFungiBacteriaCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GLLtdFungiBacteriaCov extends entity.GeneralLiabilityCov {
  protected GLLtdFungiBacteriaCov()  {
    super((java.lang.Void)null);
  }
  
  public GLLtdFungiBacteriaCov(entity.PolicyPeriod branch)  {
    super(branch, "GLLtdFungiBacteriaCov");
  }
  
  public GLLtdFungiBacteriaCov(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GLLtdFungiBacteriaCov");
  }
  
  public productmodel.DirectGLLitdFungiBacteriaLimitType getGLLitdFungiBacteriaLimitTerm() {
    return (productmodel.DirectGLLitdFungiBacteriaLimitType)getCovTerm("GLLitdFungiBacteriaLimit");
  }
  
  public boolean getHasGLLitdFungiBacteriaLimitTerm() {
    return hasCovTerm("GLLitdFungiBacteriaLimit");
  }
  
  static {
    com.guidewire._generated.productmodel.GLLtdFungiBacteriaCovInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GLLtdFungiBacteriaCov>() {
      public productmodel.GLLtdFungiBacteriaCov newEmptyInstance() {
        return new productmodel.GLLtdFungiBacteriaCov();
      }
      
      
    });
  }
}