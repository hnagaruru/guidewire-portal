package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BusinessAutoLine/coveragepatterns/BAHiredCompCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class BAHiredCompCov extends entity.BusinessAutoCov {
  protected BAHiredCompCov()  {
    super((java.lang.Void)null);
  }
  
  public BAHiredCompCov(entity.PolicyPeriod branch)  {
    super(branch, "BAHiredCompCov");
  }
  
  public BAHiredCompCov(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "BAHiredCompCov");
  }
  
  public productmodel.OptionBAHiredCompDeductType getBAHiredCompDeductTerm() {
    return (productmodel.OptionBAHiredCompDeductType)getCovTerm("BAHiredCompDeduct");
  }
  
  public boolean getHasBAHiredCompDeductTerm() {
    return hasCovTerm("BAHiredCompDeduct");
  }
  
  static {
    com.guidewire._generated.productmodel.BAHiredCompCovInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.BAHiredCompCov>() {
      public productmodel.BAHiredCompCov newEmptyInstance() {
        return new productmodel.BAHiredCompCov();
      }
      
      
    });
  }
}