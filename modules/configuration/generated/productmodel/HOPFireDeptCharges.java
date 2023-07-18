package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/HOPLine/coveragepatterns/HOPFireDeptCharges.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class HOPFireDeptCharges extends entity.HOPDwellingCov {
  protected HOPFireDeptCharges()  {
    super((java.lang.Void)null);
  }
  
  public HOPFireDeptCharges(entity.PolicyPeriod branch)  {
    super(branch, "zk9jol4tjcvk422ctjoib6nm5s9");
  }
  
  public HOPFireDeptCharges(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "zk9jol4tjcvk422ctjoib6nm5s9");
  }
  
  public productmodel.OptionHOPFireDeptChargesLimitType getHOPFireDeptChargesLimitTerm() {
    return (productmodel.OptionHOPFireDeptChargesLimitType)getCovTerm("zipjiqfv4ng8acrdf0uuddc3g38");
  }
  
  public boolean getHasHOPFireDeptChargesLimitTerm() {
    return hasCovTerm("zipjiqfv4ng8acrdf0uuddc3g38");
  }
  
  static {
    com.guidewire._generated.productmodel.HOPFireDeptChargesInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.HOPFireDeptCharges>() {
      public productmodel.HOPFireDeptCharges newEmptyInstance() {
        return new productmodel.HOPFireDeptCharges();
      }
      
      
    });
  }
}