package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GLLine/coveragepatterns/XCUSpecified.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class XCUSpecified extends entity.GeneralLiabilityCov {
  protected XCUSpecified()  {
    super((java.lang.Void)null);
  }
  
  public XCUSpecified(entity.PolicyPeriod branch)  {
    super(branch, "XCUSpecified");
  }
  
  public XCUSpecified(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "XCUSpecified");
  }
  
  public boolean getHasXCULocOpsHazBasisTerm() {
    return hasCovTerm("XCULocOpsHazBasis");
  }
  
  public productmodel.GenericXCULocOpsHazBasisType getXCULocOpsHazBasisTerm() {
    return (productmodel.GenericXCULocOpsHazBasisType)getCovTerm("XCULocOpsHazBasis");
  }
  
  static {
    com.guidewire._generated.productmodel.XCUSpecifiedInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.XCUSpecified>() {
      public productmodel.XCUSpecified newEmptyInstance() {
        return new productmodel.XCUSpecified();
      }
      
      
    });
  }
}