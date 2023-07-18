package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/HOPLine/coveragepatterns/HOPExtendedResidenceTheft.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class HOPExtendedResidenceTheft extends entity.HOPDwellingCov {
  protected HOPExtendedResidenceTheft()  {
    super((java.lang.Void)null);
  }
  
  public HOPExtendedResidenceTheft(entity.PolicyPeriod branch)  {
    super(branch, "zc9i82cntebm2a97javsujkqk7b");
  }
  
  public HOPExtendedResidenceTheft(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "zc9i82cntebm2a97javsujkqk7b");
  }
  
  static {
    com.guidewire._generated.productmodel.HOPExtendedResidenceTheftInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.HOPExtendedResidenceTheft>() {
      public productmodel.HOPExtendedResidenceTheft newEmptyInstance() {
        return new productmodel.HOPExtendedResidenceTheft();
      }
      
      
    });
  }
}